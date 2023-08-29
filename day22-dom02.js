
/*
let title = document.createElement("h1")

title.className = "test"
title.style.fontSize = "24px"
title.style.backgroundColor = "pink"
title.style.color = "#f64e67"
title.textContent = "Bu javascript ile eklendi"

//document.body.prepend(title)
document.body.append(title)

*/

for(i = 1; i<5; i++){

    let title = document.createElement("h1")

title.className = "test"
title.style.fontSize = "24px"
title.style.backgroundColor = "pink"
title.style.color = "#f64e67"
title.textContent = "Bu javascript ile eklendi" +i

document.body.append(title)

}