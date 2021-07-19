//Function to collect odd numbers among the list of numbers
//Helper Method Pattern
function collectOdds(nums){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))   //call method again by removing 1st element
    }

    helper(arr);

    return result;
}

//Pure Recursion Pattern
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));  //using concat instead of calling helper method
}