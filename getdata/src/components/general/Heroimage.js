import React from "react";
import Container from "react-bootstrap/Container";
import banner1 from "../../images/BannerImage/1.jpg";
import banner2 from "../../images/BannerImage/2.jpg";
import banner3 from "../../images/BannerImage/3.jpg";

class Heroimage extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [banner1, banner2, banner3],
    };
  }
  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }
  componentDidMount() {
    setInterval(this.switchImage, 2000);
  }
  render() {
    return (
      <Container fluid>
        <img
          src={this.state.images[this.state.currentImage]}
          style={{ width: "100%" }}
        />
      </Container>
    );
  }
}

export default Heroimage;
