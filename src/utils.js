const noten = ["dummy", "sehr gut", "gut", "befriedigend", "ausreichend", "mangelhaft", "ungenügend"]
const tendenzen = { "+": " plus", "-": " minus", "": "" }

export function prozentInPunkte(skala, prozent) {
  for (let i = 0; i < skala.length; i += 1) {
    if (prozent >= skala[i]) {
      return 15 - i
    }
  }

  return 0
}

export function punkteInNote(punkte, lang = false) {
  const ganzeNote = 6 - Math.round((punkte + 1) / 3)
  let tendenz = "";

  if (punkte > 0 && punkte % 3 === 0) {
    tendenz = "+"
  } else if (punkte > 0 && punkte % 3 === 1) {
    tendenz = "-"
  }

  const kurzNote = ganzeNote + tendenz

  if (lang) {
    return `${noten[ganzeNote]} ${tendenzen[tendenz]} (${kurzNote})`
  } else {
    return kurzNote
  }
}

export function prozentInNote(skala, prozent, lang) {
  return punkteInNote( prozentInPunkte(skala, prozent), lang )
}
