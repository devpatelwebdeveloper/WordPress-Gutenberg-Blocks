import { Component } from "@wordpress/element";
import { RichText, MediaPlaceholder } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

class TeamMemberEdit extends Component {
    onChangeTitle = title => {
        this.props.setAttributes({ title });
    };
    onChangeInfo = info => {
        this.props.setAttributes({ info });
    };
    render() {
        const { className, attributes } = this.props;
        const { title, info } = attributes;
        return (
            <div className={className}>
                <MediaPlaceholder
                    icon="format-image"
                    //onSelect={image => console.log(image)}
                    //onSelectURL={url => console.log(url)}
                    //onError={message => console.log(message)}
                    //accept="image/*"
                    allowedTypes={["image"]}
                />
                <RichText
                    className={"wp-block-mytheme-blocks-team-member__title"}
                    tagName="h4"
                    onChange={this.onChangeTitle}
                    value={title}
                    placeholder={__("Member Name", "mytheme-blocks")}
                    formatingControls={[]}
                />
                <RichText
                    className={"wp-block-mytheme-blocks-team-member__info"}
                    tagName="p"
                    onChange={this.onChangeInfo}
                    value={info}
                    placeholder={__("Member Info", "mytheme-blocks")}
                    formatingControls={[]}
                />
            </div>
        );
    }
}

export default TeamMemberEdit;