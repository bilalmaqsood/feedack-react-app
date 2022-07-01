import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";

function FeedbackItem({item}){

        return (
            <>
                <div className="card">
                    <div className="num-display">{item.rating}</div>
                    <div className="text-display">
                        {item.text}
                    </div>
                </div>
            </>
        );
}

FeedbackItem.propTypes = {};

export default FeedbackItem;
