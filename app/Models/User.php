<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Lab404\Impersonate\Models\Impersonate;
use App\Models\UserHasRoles;
use Illuminate\Auth\Notifications\ResetPassword;

class User extends Authenticatable implements CanResetPassword
{
    use HasApiTokens, HasFactory, Notifiable, Impersonate;

    protected $table = 'wpvt_users';
    protected $primaryKey = 'ID';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'display_name',
        'user_nicename',
        'user_login',
        'user_email',
        'user_pass',
        'is_admin',
        'can_view_all_centres',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'user_pass',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getAuthIdentifierName()
    {
        return 'ID';
    }

    public function getAuthPassword()
    {
        return $this->user_pass;
    }

    public function getEmailForPasswordReset()
    {
        return $this->user_email;
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }

    public function user_has_role()
    {
        return $this->hasMany(UserHasRoles::class, 'user_id');
    }
}
