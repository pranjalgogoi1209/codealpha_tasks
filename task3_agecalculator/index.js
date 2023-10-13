const uesrInput = document.querySelector('input')

uesrInput.max = new Date().toISOString().split("T")[0]

const getDaysOfMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
}

const calculateAge = () => {
    const birthDate = new Date(uesrInput.value)

    const d1 = birthDate.getDate()
    const m1 = birthDate.getMonth() + 1
    const y1 = birthDate.getFullYear()
    
    const today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3

    if(d2>=d1){
        d3 = d2 - d1
    }else{
        d3 = (d2 + getDaysOfMonth(y2, m2)) - d1
        m2--
    }

    if(m2>=m1){
        m3 = m2 - m1
    }else{
        m3 = (m2 + 12) - m1
        y2--
    }

    y3 = y2 - y1

    console.log(`${y3} years, ${m3} months, ${d3} days`);
}

