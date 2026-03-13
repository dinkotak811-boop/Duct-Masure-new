function downloadDXF(){

let dxf =
"0\nSECTION\n2\nENTITIES\n0\nENDSEC\n0\nEOF"

let blob =
new Blob([dxf],{type:"application/dxf"})

let link =
document.createElement("a")

link.href =
URL.createObjectURL(blob)

link.download =
"duct-pattern.dxf"

link.click()

}

