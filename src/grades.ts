export function getNumberOfGrades(grades:number[]) {
    return grades.length;
    }

export function getSumGrades(grades:number[]) {
    let sum:number = 0;
    for (const i of grades){
        sum += i;
    }
    return sum;
}

export function getAverageValue(grades:number[]) {
    return getSumGrades(grades)/grades.length;
}

export function getPassingGrades(grades:number[]) {
   return grades.filter(grade => grade>=10);
}


export function getFailingGrades(grades:number[]) {
    return grades.filter(grade =>grade<10);
}

export function getRaisedGrades(grades: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i <= grades.length; i++) {
        const grade = grades[i]; 
        if (typeof grade === "number") {
            const raised = grade + 1;
            if (raised < 20) {
                result.push(raised);
            } else result.push(20);
        }
    }
    return result;
}