// q1
function printMovieReview ({title, releaseYear, reviewers}) {
    console.log(`제목 : ${title}`);
    console.log(`개봉 : ${releaseYear}`)
    const [firstReviewer = "없음"] = reviewers
    console.log(`첫 번째 리뷰어 : ${firstReviewer}`)
}

printMovieReview({
    title : "하얼빈",
    releaseYear: 2024,
    reviewers: ["박정민", "김효빈", "이정환"],
})

printMovieReview({
    title : "위키드",
    releaseYear: 2024,
    reviewers: [],
})

// q2
function printAvgScore(students) {
    for(let student in students) {
        let avg = 0;
        const {scores} = students[student];
        for(let score of scores) avg += score;
        avg = avg / scores.length
        console.log(`${student} : ${avg}`)
    }
}

printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
})