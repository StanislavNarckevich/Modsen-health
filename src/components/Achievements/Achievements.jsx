import {
  Achievement, AchievementNumber, AchievementsWrapper, AchievementText,
} from './style';

const achievementsData = [
  {
    number: '240',
    text: 'Qualified Doctors & Medical Specialists',
  },
  {
    number: '1.456',
    text: 'Medical Tests Done For Our Patients',
  },
  {
    number: '1M+',
    text: 'Years of Experience The Medical Field',
  },
];

function Achievements() {
  return (
    <AchievementsWrapper>
      {achievementsData.map((achievement) => (
        <Achievement key={achievement.text}>
          <AchievementNumber>
            {achievement.number}
          </AchievementNumber>
          <AchievementText>
            {achievement.text}
          </AchievementText>
        </Achievement>
      ))}
    </AchievementsWrapper>
  );
}

export default Achievements;
