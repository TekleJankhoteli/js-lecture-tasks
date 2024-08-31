let main =
  "<table style='border-collapse:collapse; width:50%;height:200px; background-color:hotpink;'>";
let counter = 1;
// aq xo i samze naklebi araris da mesamed rato mushaobs
for (let i = 0; i < 3; i++) {
  main = main + "<tr style='border:2px solid grey'>";

  for (let j = 0; j < 3; j++) {
    main = main + "<td style='border:2px solid grey'>" + counter + "</td>";
    counter++;
  }
}

main = main + "</tr>";
main = main + "</table>";

document.write(main);
