
$(document).ready(function () {

    let data = fetch('data.json').then(function (response) {
        return response.json();
    }).then(function (obj) {
        let d = new Date();
        let currentDay = d.getDay();
        for (let i = 0; i < 7; i++) {
            $("#char-bar-" + (i + 1) + "").css(
                { "height": obj[i].amount * 2 }
            )
            $("#day-" + (i + 1) + "").text(
                obj[i].day
            )
            $("#char-amount-above-" + (i + 1)).text("$" + obj[i].amount)
            if ((i + 1) == currentDay) {
                $("#char-bar-" + currentDay + "").css({
                    "background-color": "cyan"
                })
            }
        }
        let letters = ['c', 'h', 'a', 'r', '-', 'b', 'a', 'r', '-']
        $(".char-bar").hover(function () {
            $(this).css({
                "opacity": "0.6"
            })
            let activeBar = this.id;
            for (let i = 0; i < letters.length; i++) {
                activeBar = activeBar.replace(letters[i], '')
            }
            $("#char-amount-above-" + activeBar + "").css({
                "display": "block"
            })
        })
        $(".char-bar").mouseleave(function () {
            $(this).css({
                "opacity": "1"
            })
            let activeBar = this.id;
            for (let i = 0; i < letters.length; i++) {
                activeBar = activeBar.replace(letters[i], '')
            }
            $("#char-amount-above-" + activeBar + "").css({
                "display": "none"
            })

        })





    }).catch(function (error) {
        console.error("Something went wrong with" +
            " retrieving datas");
        console.error(error);
    })





})