import { useState } from 'react';
import logo from './logo.svg';
// import './App.css';


const values=[
  
    [-1, 5, -1, 9, -1, -1, -1, -1, -1],
    [8, -1, -1, -1, 4, -1, 3, -1, 7],
    [-1, -1, -1, 2, 8, -1, 1, 9, -1],
    [5, 3, 8, 6, -1, 7, 9, 4, -1],
    [-1, 2, -1, 3, -1, 1, -1, -1, -1],
    [1, -1, 9, 8, -1, 4, 6, 2, 3],
    [9, -1, 7, 4, -1, -1, -1, -1, -1],
    [-1, 4, 5, -1, -1, -1, 2, -1, 9],
    [-1, -1, -1, -1, 3, -1, -1, 7, -1]
  
]

function App() {

  const [sudokuArr,setSudokuArr]=useState(values)

  function getArr(arr){
    return JSON.parse(JSON.stringify(arr));
  }

  function InputChange(e,row,col){
    var val=parseInt(e.target.value) || -1, grid=getArr(sudokuArr)
    //Input value should range from 1-9
    if(val===-1 || val>=1 && val<=9){
      grid[row][col]=val;
    }
    
    setSudokuArr(grid)
  }

  //function to compare Sudokus

  function compareSudokus(currentSudoku, solveSudoku){
    let res={
      isComplete: true,
      isSolvable: true
    }
    for(var i=0;i<9;i++)
    {
      for(var j=0;j<9;j++)
      {
        if(currentSudoku[i][j] != solveSudoku[i][j]){
          if(currentSudoku[i][j]!=-1){
            res.isSolvable=false
          }
          res.isComplete=false
        }
      }
    }
    return res;
  }


  function checkSudoku(){
    let sudoku=getArr(values)
    solver(sudoku)
    let compare=compareSudokus(sudokuArr,sudoku)
    if(compare.isComplete){
      alert("Congratulations! You have solved sudoku!");
    }else if(compare.isSolvable){
      alert("keep going!");
    }else{
      alert("Sudoku can't be solved, Try again!");
    }
  }

  function resetSudoku(){
     let sudoku=getArr(values)
     setSudokuArr(sudoku)
  }

  function checkRow(grid,row,num){
       return grid[row].indexOf(num) === -1
  }
  
  // check num is unique in col
  function checkCol(grid,col,num){
      return grid.map(row =>row[col]).indexOf(num)=== -1;
  }

  function checkBox(grid,row,col,num){
    let boxArr=[]
    let rowStart=row - (row%3),
    colStart=col - (col%3);

    for(let i=0;i<3;i++)
    {
      for(let j=0;j<3;j++)
      {
        // get all the cellnumber and push to box arr
        boxArr.push(grid[rowStart+i][colStart+j])
      }
    }

    return boxArr.indexOf(num)=== -1
  }

  function checkValid(grid,row,col,num){
    //num should be unique in row,col and in the square 3*3
    if(checkRow(grid,row,num) && checkCol(grid,col,num) && checkBox(grid,row,col,num)){
      return true
    }
    return false
  }

  function getNext(row,col){
     return col!==8 ? [row,col+1] : row!=8 ? [row+1,0] : [0,0];
  }
  
  // recursive function to solve sudoku
  function solver(grid, row=0, col=0){

    if(grid[row][col] !==-1){

      let isLast= row>=8 && col>=8;
      if(!isLast){
        let [newRow,newCol]= getNext(row,col);
      return solver(grid,newRow,newCol)
      }
      
    }
     for(let num=1;num<=9;num++)
     {
      // check if num is satisfying sudoku constraints
      if(checkValid(grid,row,col,num)) {
         grid[row][col]=num;
         let [newRow,newCol]= getNext(row,col);

         if(!newRow && !newCol){
          return true;
         }

         if(solver(grid,newRow,newCol)) {
          return true;
         }
      }
     }

     grid[row][col]=-1;
     return false;
  }
  
  //function to solve sudoku
  function solveSudoku(){
    let sudoku=getArr(values)
    solver(sudoku)
    setSudokuArr(sudoku)
  }
  return (
    <div class="bg-slate-400 w-full h-screen">
      <div class=" ml-96 justify-center text-lg items-center">
        <h1 class="text-white  font-bold">Solve Sudoku</h1>
        <table>
          <tbody>
            {
              [0,1,2,3,4,5,6,7,8].map((row,rIndex)=>{
                return <tr key={rIndex} class={(row+1) %3===0 ? 'border-black border-b-4': ''}>
                  { [0,1,2,3,4,5,6,7,8].map((col,cIndex)=>{
                return <td key={rIndex + cIndex} class={(col+1) %3===0 ? 'border-black border-r-4': ''}>
                     <input onChange={(e)=>InputChange(e,row,col)} value={sudokuArr[row][col]=== -1 ? '': sudokuArr[row][col]} class="w-14 h-14 text-5xl text-center p-0" disabled={values[row][col]!==-1}/>
                     </td>
              })}
                </tr>
              })
            }
           
          </tbody>
        </table>
        <div class="ml-44 mt-5">
          <button class="bg-amber-400 font-bold px-2 py-2 rounded-3xl w-1/12 " onClick={checkSudoku}>Check</button>
          <button class="bg-orange-500 font-bold px-2 py-2 rounded-3xl w-1/12 ml-5" onClick={solveSudoku}>Solve</button>
          <button class="bg-teal-300 font-bold px-2 py-2 rounded-3xl w-1/12 ml-5" onClick={resetSudoku}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
