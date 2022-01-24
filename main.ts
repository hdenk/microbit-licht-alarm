music.setVolume(60)
let ALARM_SCHWELLE_LICHT = 100
let MIN_TON_FREQ = 262
let MAX_TON_FREQ = 523
let TON_SCHRITTE = 32
let freqDelta = (MAX_TON_FREQ - MIN_TON_FREQ) / TON_SCHRITTE
let tonFreq = MIN_TON_FREQ
basic.forever(function () {
    if (input.lightLevel() > ALARM_SCHWELLE_LICHT) {
        if (Math.round(tonFreq) < MAX_TON_FREQ) {
            tonFreq += freqDelta
            music.playTone(Math.round(tonFreq), music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Sixteenth))
        } else {
            tonFreq = MIN_TON_FREQ
        }
    }
})
