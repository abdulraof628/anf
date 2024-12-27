<?php

namespace App\Jobs\Ai;

use App\Events\AiResponseStream;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;
use OpenAI;

class CreateChat implements ShouldQueue
{
    use Dispatchable, Queueable;

    protected $chatId;
    protected $userId;
    protected $messages;

    /**
     * Create a new job instance.
     * 
     * @param string $chatId
     * @param string $userId
     * @param string $messages
     */
    public function __construct($chatId, $userId, $messages)
    {
        $this->chatId = $chatId;
        $this->userId = $userId;
        $this->messages = $messages;
        $this->onQueue('ai_create_chat');
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {   
        $api_key = env('OPENAI_API_KEY');
        $client = OpenAI::client($api_key);

        $thread = $client->threads()->create([]);

        $client->threads()->messages()->create($thread->id, [
            'role' => 'user',
            'content' => $this->messages,
        ]);

        $run = $client->threads()->runs()->createStreamed(
            threadId: $thread->id,
            parameters: [
                "assistant_id" => 'asst_wRbO55kZ9S8XmxSkqu5ndCB4',
                'tool_choice' => [
                    'type' => 'file_search'
                ],
            ]
        );
        
        foreach($run as $response){
            if($response->event === 'thread.message.created'){
                $data['thread_id'] = $thread->id;
                $data['status'] = 'created';
                AiResponseStream::dispatch($this->userId, $data);
            }
            if($response->event === 'thread.message.delta'){
                $data['text'] = $response->response->delta['content'][0]['text']['value'];
                $data['status'] = 'processing';
                AiResponseStream::dispatch($this->userId, $data);
            }
            if($response->event === 'thread.message.completed'){
                SaveMessage::dispatch($this->chatId, $this->userId, $thread->id, $response->response->runId);
            }
        }
    }
}
