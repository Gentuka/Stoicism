<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>View Quote | Product Quote</title>
    <!-- Styles etc. -->
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <h1>Here's a list of available products</h1>
        <table>
            <thead>
                <td>Name</td>
                <td>Quote</td>
            </thead>
            <tbody>
            @foreach ($allQuotes as $quote)
                <tr>
                    <td class="inner-table">{{ $quote->author}}</td>
                    <td class="inner-table">{{ $quote->quote}}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>
</body>
</html>
