import React from "react";
import { connect } from "react-redux";
import { removePart } from "../actions/actions.js";

const AddedFeature = (props) => {
    return (
        <li>
            <button
                className="button"
                onClick={() => {
                    props.removePart(props.feature);
                }}>
                X
            </button>
            {props.feature.name}
        </li>
    );
};

export default connect(null, { removePart })(AddedFeature);
