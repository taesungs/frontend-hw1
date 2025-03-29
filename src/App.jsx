import { CustomButton } from "./components/Button/Button.jsx";
import { CustomInput } from "./components/Input/Input.jsx";
import { CustomCard } from "./components/Card/Card.jsx";
import { ProfilePhoto } from "./components/ProfilePhoto/ProfilePhoto.jsx";
import './App.css';

export default function App() {
  return (
    <div className="user-details">
      <CustomCard>
        <h2>Profile Photo</h2>
        <ProfilePhoto />
        <br />
        <hr />
        <h2>User Details</h2>
        <div className="input-row">
          <div>
            <CustomInput label='Label Name' placeholder="Placeholder" />
          </div>
          <div>
            <CustomInput label='Label Name' placeholder="Placeholder" />
          </div>
        </div>
        <div>
          <CustomInput label='Label Name' placeholder="Placeholder" />
        </div>
        <div>
          <CustomInput label='Label Name' placeholder="Placeholder" />
        </div>
        <div>
          <CustomInput label='Label Name' placeholder="Placeholder" />
        </div>
        <div className="button-row">
          <CustomButton className='back-btn'>Back</CustomButton>
          <CustomButton className='continue-btn'>Continue</CustomButton>
        </div>
      </CustomCard>
    </div>
  );
}
