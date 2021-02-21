function nbYear(p0, percent, aug, p)
{
    if (p <= 0 || p0 <= 0 || p0 >= p) {
        return "Wrong input, please try again";
    }
    
    let pop = p0;
    let count = 0;
    while (pop < p)
    {
        pop += percent * pop / 100 + aug;
        count++;
    }
    return count;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
