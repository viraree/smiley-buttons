input.onButtonPressed(Button.A, function f(): number {
    let x = 2
    basic.showIcon(IconNames.Heart)
    return x ** 2
})
input.onButtonPressed(Button.B, function b(): number {
    basic.showNumber(4)
    basic.showLeds(`
    . . . . .
    . # . . .
    . . # . .
    . . . . .
    # . . . .
    `)
    return 1
})
