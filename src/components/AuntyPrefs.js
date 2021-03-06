import React from 'react'
import { Link } from "react-router-dom"

export class AuntyPrefs extends React.Component {
    render() {
        return (
            <section>
                <p>Hello Aunty Pearl!</p>
                <p>Please select your areas of Expertise</p>
                <hr></hr>
                <p>Choose up to 2</p>
                <form>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Cooking/Entertaining</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Relationships</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Arts + Crafts</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Secrets</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Fashion/Etiquette</label>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Divination</label>
                    </div>
                    <button  class="btn btn-primary">
                        <Link to="/matches">See my matches</Link>
                    </button>
                </form>
            </section>
        )
    }
}

export default AuntyPrefs