<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
</head>
<body>
    <a href="/quotes">View Quotes</a>

    <h1> {{ $quote->author }}</h1>
    <p> {{ $quote->quote }}</p>
</body>
</html>
