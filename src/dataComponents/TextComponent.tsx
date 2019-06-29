import React from "react";

export interface textComponentPropsInterface {
    id: string;
    title: string;
    description: string;
}

class TextComponent extends React.Component<textComponentPropsInterface, any> {
    constructor(props: textComponentPropsInterface) {
        super(props);
    }

    updateTitle(title:string) {

    }


    render() {
      return (
          <div>
              Test Render
              <input name="title" value={this.props.title}></input>
              <input name="description" value={this.props.description}></input>
          </div>
          
        );
    }
  }

  export default TextComponent;
