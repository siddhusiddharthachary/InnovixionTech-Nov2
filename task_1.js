let intervalId;

        function startCountdown() {
            const userDate = new Date(document.getElementById("countdownDate").value);
            countdownTimer(userDate);
            clearInterval(intervalId);
            intervalId = setInterval(() => countdownTimer(userDate), 1000);
        }

        function countdownTimer(targetDate) {
            const difference = targetDate - new Date();
            if (difference > 0) {
                const parts = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                };

                // Update each block with the corresponding value
                document.getElementById("days-value").innerHTML = parts.days;
                document.getElementById("hours-value").innerHTML = parts.hours;
                document.getElementById("minutes-value").innerHTML = parts.minutes;
                document.getElementById("seconds-value").innerHTML = parts.seconds;
            }
        }