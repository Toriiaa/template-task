import React from 'react'

function TopBar() {
    return (
        <div>
            <div class="container">
      <div id="form-container" className="form-container">
        <form>
          <div className="form-context">
            <div className="form-item">
              <div className="sort-class">
                <input placeholder="Search Template" />
                <i></i>
              </div>
            </div>
            <div className="form-item form-item-context">
              <span className="sort-class">Sort By: </span>
              <div>
                <label className="label-item">Category</label>
                <input placeholder="All" />
              </div>
              <div>
                <label className="label-item">Order</label>
                <input placeholder="Default" type="text" />
                <i></i>
              </div>
              <div>
                <label className="label-item">Date</label>
                <input placeholder="Default" type="text" />
                <i></i>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="alert-div">
        <p>
          <i
            style="color: #fc830a; margin-right: 5px"
            class="fas fa-exclamation-circle"
          ></i>
          Tada! Get started with a free template. Cant find what you are looking
          for? Search from the 1000+ availabale templates
        </p>
      </div>

        </div>
        </div>
    )
}

export default TopBar;
