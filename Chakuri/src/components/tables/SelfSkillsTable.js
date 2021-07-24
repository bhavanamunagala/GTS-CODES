import React, { Component } from 'react'


import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload, faAlignCenter} from '@fortawesome/free-solid-svg-icons'
import { Button, Table } from 'react-bootstrap';
const SelfSkillsTable = props => (
    <table class="table text-center">
      <thead>
        <tr>
          <th>Skill Name</th>
          <th>Exp in Years</th>
          <th>Exp in Months</th>
          <th>Self Rate</th>
        </tr>
      </thead>
      <tbody>
        {props.skills.length > 0 ? (
          props.skills.map(skill => (
            <tr key = {skill.id}>
              <td>{skill.skillName}</td>
              <td>{skill.expYear}</td>
              <td>{skill.expMonth}</td>
              <td>{skill.selfRate}</td>
              <td>
                <button onClick = {() => {
                  props.editRow(skill)
                }}
                className = "button"
                >Edit
                </button>
              </td>
              <td>
                <button onClick = {() => props.deleteSkill(skill.id)} className = "button">
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan = {3}>No User</td>
          </tr>
        )}
      </tbody>
    </table>
)
export default SelfSkillsTable
