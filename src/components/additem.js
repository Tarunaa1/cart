import React from "react";
class Additem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  state = {};
  render() {
    return (
      <div>
        <h4 className="row m-5">Search items you want to add: </h4>
        <form
          className="row m-5"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.add(
              this.state.productName,
              Number(this.state.productPrice)
            );
          }}
        >
          <div className="mb-3 col-4">
            <label htmlFor="InputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="InputName"
              aria-describedby="name"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="InputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.currentTarget.value) });
              }}
              value={this.state.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-4 mt-4 mb-1">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default Additem;
