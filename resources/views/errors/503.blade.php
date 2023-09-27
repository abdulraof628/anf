@extends('errors::minimal')

@section('title', __('Service Unavailable'))
@section('code', '503')
@section('message', $exception->getMessage() ? $exception->getMessage() : __('Service Unavailable'))
