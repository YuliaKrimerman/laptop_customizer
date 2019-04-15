import React from 'react';
import FeatureList from './FeatureList'

export default function Features(props){

return(
    <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <FeatureList 
            features ={props.features}
            handleUpdate={props.handleUpdate}
            selected ={props.selected}
        />
          </section>
    )
}
