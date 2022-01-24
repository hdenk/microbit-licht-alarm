music.setVolume(60)
let MIN_TON_IN_HZ = 262
let MAX_TON_IN_HZ = 523
let ANZAHL_SCHRITTE = 32
let DELTA_IN_HZ = (MAX_TON_IN_HZ - MIN_TON_IN_HZ) / ANZAHL_SCHRITTE
let tonInHz = MIN_TON_IN_HZ
basic.forever(function () {
    let ALARMING_LIGHT_LEVEL = 0
    if (input.lightLevel() > ALARMING_LIGHT_LEVEL) {
        if (Math.round(tonInHz) < MAX_TON_IN_HZ) {
            tonInHz += DELTA_IN_HZ
            music.playTone(Math.round(tonInHz), music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Sixteenth))
        } else {
            tonInHz = MIN_TON_IN_HZ
        }
    }
})
