import React from 'react';
import s from './Skill.module.css'
import react from '../../assets/img/react.svg'
export type SkillsPropsType = {
    nameSkill: string
   // descriptionSkill: string
    img:string
}

const Skill = (props: SkillsPropsType) => {
    return (
        <div className={s.skillMain}>
            <img className={s.imgSkill} src={props.img}/>
            <h4>{props.nameSkill}</h4>


        </div>
    );
};

export default Skill;

//<div className={s.descriptionSkill}>{props.descriptionSkill}</div>