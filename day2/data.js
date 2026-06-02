let PI = 3.14
let speedOfLight = "3*10^8"
let myMarks = 45.0

/*
{
    "speedOfLight": "3*10^8",
    "myMarks": 45.0
} */

export let calculateAreaOfCircle = (radius)=>{
    return PI * radius * radius
}

// default export
export default PI
// named export
export {speedOfLight, myMarks}
console.log("dkfjdk")

1. git init
2. git add .
3. git config user.email tmro_email
4. git config user.name tmro_username
5. git commit -m "your commit message"
6. git remote add origin tmro_github_repository_url
Optional Steps 7
7. git branch -M tmro_naya_branch
8. git push -u origin tmro_branch