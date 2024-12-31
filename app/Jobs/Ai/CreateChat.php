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

    protected $assistantId;
    protected $chatId;
    protected $userId;
    protected $messages;

    /**
     * Create a new job instance.
     * 
     * @param string $assistantId
     * @param string $chatId
     * @param string $userId
     * @param string $messages
     */
    public function __construct($assistantId, $chatId, $userId, $messages)
    {
        $this->assistantId = $assistantId;
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
                "assistant_id" => $this->assistantId,
                'tool_choice' => [
                    'type' => 'file_search'
                ],
            ]
        );

        foreach($run as $response){
            ProcessResponse::dispatchSync($response, $this->chatId, $this->userId, $thread->id);
        }
    }
}
