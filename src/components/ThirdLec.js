import React, { Component } from 'react';

class ThirdLec extends Component {
    render() {
        const arr = ["a","b","c","d","e","f"]
        // const [a,c,...b] = arr //spreading arrays
        const arr1 =[10,20,30,40]
        const arr2 =[...arr1,...arr] //Merging arrays

        return (
            <div>
                {/* <h1>A is --{a}</h1>
                <h1>B is --{b}</h1>
                <h1>C is --{c}</h1>
                 */}
                <h3>Array List</h3>
                <ul>{
                    arr2.map((i)=> {
                        return <li>{i}</li>
                    })
                }
                </ul>
            </div>
        );
    }
}

export default ThirdLec;