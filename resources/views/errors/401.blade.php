@extends('errors::minimal')

@section('title', __('Unauthorized'))
@section('code', '401')
@section('message', __("Unauthorized"))
@section('extra_message', __("return to home"))
@section('logout')
