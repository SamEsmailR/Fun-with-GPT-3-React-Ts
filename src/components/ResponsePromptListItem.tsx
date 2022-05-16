
import { MyResponse } from '../types/MyResponse';
import { PromptContainer } from './ResponsePromptListItem.styles';

type ResponsePromptListItemProps = {
    item: MyResponse;
}
function ResponsePromptListItem(props: ResponsePromptListItemProps){
    return (
        <PromptContainer>
            <div className='prompt-block'>
                <h3>Prompt:</h3>
                <p>{props.item.q}</p>
            </div>
            <div className='response-block'>
                <h3>Response:</h3>
                <p>{props.item.a}</p>
            </div>
        </PromptContainer>
    );
}

export default ResponsePromptListItem;