<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        return view('viewquotes', [
            'allQuotes' => Quote::all(),
            ]);
    }

    public function show($id)
    {
        return view('quote', [
            'quote' => Quote::findOrFail($id)
        ]);
    }

    public function getRandomQuote()
    {
        return view('index', [
            'quote' => Quote::all()->random(),
        ]);
    }
}
