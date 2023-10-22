// import { BiSolidTrashAlt } from 'react-icons/bi';
import { BsPinAngleFill } from 'react-icons/bs';
import { FlexIcon, WrapperContact, WrapperContactList } from '../atoms/Divs';
import { IconPin } from '../atoms/Spans';
import Header from '../components/Header';
import Search from '../components/Search';

export const LeftSide = () => {
  return (
    <section>
      <Header />
      <Search />
      <WrapperContactList>
        <WrapperContact>
          a
          <FlexIcon>
            <IconPin>
              <BsPinAngleFill />
            </IconPin>
          </FlexIcon>
        </WrapperContact>
      </WrapperContactList>
    </section>
  );
};
