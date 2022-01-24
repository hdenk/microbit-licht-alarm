input.onButtonPressed(Button.A, function () {
    if (lautstaerke >= 0) {
        lautstaerke = lautstaerke - 1
        music.setVolume(lautstaerke)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    if (lautstaerke <= 255) {
        lautstaerke = lautstaerke + 1
        music.setVolume(lautstaerke)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(200)
    }
})
function unerlaubteFrequenz (freq: number) {
    return freq < MIN_TON_FREQ || freq > MAX_TON_FREQ
}
let lautstaerke = 0
let MAX_TON_FREQ = 0
let MIN_TON_FREQ = 0
let LAUSTAERKE_BEI_START = 60
let ALARM_SCHWELLE_LICHT = 100
MIN_TON_FREQ = 262
MAX_TON_FREQ = 440
let TON_SCHRITTE = 12
let freqDelta = (MAX_TON_FREQ - MIN_TON_FREQ) / TON_SCHRITTE
let alarmTonFrequenz = MIN_TON_FREQ
lautstaerke = LAUSTAERKE_BEI_START
music.setVolume(lautstaerke)
basic.forever(function () {
    if (input.lightLevel() > ALARM_SCHWELLE_LICHT) {
        if (unerlaubteFrequenz(alarmTonFrequenz)) {
            freqDelta = freqDelta * -1
        }
        music.playTone(alarmTonFrequenz, music.beat(BeatFraction.Eighth))
        alarmTonFrequenz = alarmTonFrequenz + freqDelta
    } else {
        basic.showIcon(IconNames.Skull)
    }
    basic.pause(1)
})
