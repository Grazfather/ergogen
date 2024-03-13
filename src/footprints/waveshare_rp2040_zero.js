// Waveshare RP2040 Zero
// Params
// NOTE: This is flipped at the moment. orientation: up has the board flipped so that we can see the LED
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    GND: {type: 'net', value: 'GND'},
    VCC5V: {type: 'net', value: 'VCC5V'},
    VCC3V3: {type: 'net', value: 'VCC3V3'},
    P0: {type: 'net', value: 'P0'},
    P1: {type: 'net', value: 'P1'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},
    P7: {type: 'net', value: 'P7'},
    P8: {type: 'net', value: 'P8'},
    P9: {type: 'net', value: 'P9'},
    P10: {type: 'net', value: 'P10'},
    P11: {type: 'net', value: 'P11'},
    P12: {type: 'net', value: 'P12'},
    P13: {type: 'net', value: 'P13'},
    P14: {type: 'net', value: 'P14'},
    P15: {type: 'net', value: 'P15'},
    P26: {type: 'net', value: 'P26'},
    P27: {type: 'net', value: 'P27'},
    P28: {type: 'net', value: 'P28'},
    P29: {type: 'net', value: 'P29'},
  },
  body: p => {
    const standard = `
      (module "Waveshare RP2040 Zero" (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}
      `
    function pins(def_neg, def_pos, flip) {
      const text_effects = `(effects (font (size 0.5 0.5) (thickness 0.15)))`;
      return `
        ${''/* component outline */}
        (fp_rect (start -9 -11.75) (end 9 11.75)
          (stroke (width 0.12) (type solid)) (fill none) (layer Dwgs.User))
        ${''/* pin names */}
        (fp_text user P0 (at ${def_pos}6 -10.16) (layer F.SilkS) ${text_effects})
        (fp_text user P1 (at ${def_pos}6 -7.62) (layer F.SilkS) ${text_effects})
        (fp_text user P2 (at ${def_pos}6 -5.08) (layer F.SilkS) ${text_effects})
        (fp_text user P3 (at ${def_pos}6 -2.54) (layer F.SilkS) ${text_effects})
        (fp_text user P4 (at ${def_pos}6 0) (layer F.SilkS) ${text_effects})
        (fp_text user P5 (at ${def_pos}6 2.54) (layer F.SilkS) ${text_effects})
        (fp_text user P6 (at ${def_pos}6 5.08) (layer F.SilkS) ${text_effects})
        (fp_text user P7 (at ${def_pos}6 7.62) (layer F.SilkS) ${text_effects})
        (fp_text user P8 (at ${def_pos}6 10.16) (layer F.SilkS) ${text_effects})

        (fp_text user P9  (at ${def_pos}5.08 8.36) (layer F.SilkS) ${text_effects})
        (fp_text user P10 (at ${def_pos}2.54 8.36)  (layer F.SilkS) ${text_effects})
        (fp_text user P11 (at 0 8.36)               (layer F.SilkS) ${text_effects})
        (fp_text user P12 (at ${def_neg}2.54 8.36)  (layer F.SilkS) ${text_effects})
        (fp_text user P13 (at ${def_neg}5.08 8.36)  (layer F.SilkS) ${text_effects})

        (fp_text user P14 (at ${def_neg}6 10.16) (layer F.SilkS) ${text_effects})
        (fp_text user P15 (at ${def_neg}6 7.62) (layer F.SilkS) ${text_effects})
        (fp_text user P26 (at ${def_neg}6 5.08) (layer F.SilkS) ${text_effects})
        (fp_text user P27 (at ${def_neg}6 2.54) (layer F.SilkS) ${text_effects})
        (fp_text user P28 (at ${def_neg}6 0) (layer F.SilkS) ${text_effects})
        (fp_text user P29 (at ${def_neg}6 -2.54) (layer F.SilkS) ${text_effects})
        (fp_text user 3V3 (at ${def_neg}6 -5.08) (layer F.SilkS) ${text_effects})
        (fp_text user GND (at ${def_neg}6 -7.62) (layer F.SilkS) ${text_effects})
        (fp_text user 5V  (at ${def_neg}6 -10.16) (layer F.SilkS) ${text_effects})

        ${''/* and now the actual pins */}
        (pad 1 thru_hole oval (at ${def_pos}7.62 -10.16 ${p.r + 180*flip}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P0})
        (pad 2 thru_hole oval (at ${def_pos}7.62 -7.62 ${p.r + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P1})
        (pad 3 thru_hole oval (at ${def_pos}7.62 -5.08 ${p.r + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P2})
        (pad 4 thru_hole oval (at ${def_pos}7.62 -2.54 ${p.r + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P3})
        (pad 5 thru_hole oval (at ${def_pos}7.62 0 ${p.r + 180*flip})      (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P4})
        (pad 6 thru_hole oval (at ${def_pos}7.62 2.54 ${p.r + 180*flip})   (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P5})
        (pad 7 thru_hole oval (at ${def_pos}7.62 5.08 ${p.r + 180*flip})   (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P6})
        (pad 8 thru_hole oval (at ${def_pos}7.62 7.62 ${p.r + 180*flip})   (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P7})
        (pad 9 thru_hole oval (at ${def_pos}7.62 10.16 ${p.r + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P8})

        (pad 10 thru_hole oval (at ${def_pos}5.08 10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P9})
        (pad 11 thru_hole oval (at ${def_pos}2.54 10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P10})
        (pad 12 thru_hole oval (at 0 10.16 ${p.r + 90})              (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P11})
        (pad 13 thru_hole oval (at ${def_neg}2.54 10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P12})
        (pad 14 thru_hole oval (at ${def_neg}5.08 10.16 ${p.r + 90}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P13})

        (pad 15 thru_hole oval (at ${def_neg}7.62 10.16 ${p.r + 180 + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P14})
        (pad 16 thru_hole oval (at ${def_neg}7.62 7.62 ${p.r + 180 + 180*flip})   (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P15})
        (pad 17 thru_hole oval (at ${def_neg}7.62 5.08 ${p.r + 180 + 180*flip})   (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P26})
        (pad 18 thru_hole oval (at ${def_neg}7.62 2.54 ${p.r + 180 + 180*flip})   (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P27})
        (pad 19 thru_hole oval (at ${def_neg}7.62 0 ${p.r + 180 + 180*flip})      (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P28})
        (pad 20 thru_hole oval (at ${def_neg}7.62 -2.54 ${p.r + 180 + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.P29})
        (pad 21 thru_hole oval (at ${def_neg}7.62 -5.08 ${p.r + 180 + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.VCC3V3})
        (pad 22 thru_hole oval (at ${def_neg}7.62 -7.62 ${p.r + 180 + 180*flip})  (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.GND})
        (pad 23 thru_hole oval (at ${def_neg}7.62 -10.16 ${p.r + 180 + 180*flip}) (size 2.5 1.5) (drill 1 (offset -0.5 0)) (layers *.Cu *.Mask) ${p.VCC5V})
`
    }
    // TODO: I have this backwards
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '', true)})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-', false)})
        `
    }
  }
}
