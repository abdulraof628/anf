<?php

namespace App\Jobs;

use DB;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Auth;
use Log;
use OpenAI;

class InitiateChat implements ShouldQueue
{
    use Dispatchable, Queueable;

    protected $ulid;
    protected $messages;

    /**
     * Create a new job instance.
     * 
     * @param string $ulid
     */
    public function __construct($ulid, $messages)
    {
        $this->ulid = $ulid;
        $this->messages = $messages;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $api_key = env('OPENAI_API_KEY');
        $client = OpenAI::client($api_key);

        /* Create premade prompt */
        $thread = $client->threads()->createAndRun([
            'assistant_id' => 'asst_wRbO55kZ9S8XmxSkqu5ndCB4',
            'thread' => [
                'messages' => [
                    [
                        'role' => 'user',
                        'content' => $this->messages,
                    ],
                ],
            ],
            'tool_choice' => [
                'type' => 'file_search'
            ]
        ]);

        $threadId = $thread->threadId;
        $runId = $thread->id;

        while(true){
            $response = $client->threads()->runs()->retrieve(
                threadId: $threadId,
                runId: $runId,
            );
            if($response->status !== 'in_progress'){
                $messages = $client->threads()->messages()->list($threadId);

                // Save thread ID and run ID
                DB::table('ai_chats')->where('id', $this->ulid)->update([
                    'thread_id' => $threadId,
                    'run_id' => $runId,
                    'messages' => json_encode($messages),
                ]);
                break;
            }
        }

    }
}
