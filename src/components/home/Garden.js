import React from 'react';
import { Link } from 'react-router-dom';
import Inventory from './Inventory';


const Garden = () => {
  return (
    <div className="garden container">
        <div className="row">
            <div className="farm-plot container col s5 offset-s2">
                <div className="row">
                    <div className="single-plot col s5 offset-s1">plot 1</div>
                    <div className="single-plot col s5">plot 2</div>
                </div>
                <div className="row">
                    <div className="single-plot col s5 offset-s1">plot 3</div>
                    <div className="single-plot col s5">plot 4</div>
                </div>
            </div>
            <div className="inventory container col s3 offset-s2">
                <Inventory />
            </div>
        </div>
    </div>
  )
}

export default Garden;