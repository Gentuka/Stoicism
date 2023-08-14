<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        $quotes = Quote::all();

        return view('viewquotes', ['allQuotes' => $quotes]);
    }

    public function show($id)
    {
        return view('quote', [
            'quote' => Quote::findOrFail($id)
        ]);
    }

    public function getRandomQuote()
    {
        $randomQuote = Quote::all()->random();

        return view('index', [
            'quote' => $randomQuote,
        ]);
    }
}
