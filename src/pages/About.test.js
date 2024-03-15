import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  test.skip('renders About Me heading', () => {
    render(<AboutPage />);
    const aboutMeHeading = screen.getByText('ABOUT ME.');
    expect(aboutMeHeading).toBeInTheDocument();
  });

  test.skip('renders Profile Image', () => {
    render(<AboutPage />);
    const profileImage = screen.getByAltText('Me');
    expect(profileImage).toBeInTheDocument();
  });

  test.skip('renders Technical Proficiencies heading', () => {
    render(<AboutPage />);
    const technicalProficienciesHeading = screen.getByText('SKILLS & PROFICIENCIES.');
    expect(technicalProficienciesHeading).toBeInTheDocument();
  });

  test.skip('renders "Agile Practices" heading', () => {
    render(<AboutPage />);
    const agilePracticesHeading = screen.getByText('Agile Practices.');
    expect(agilePracticesHeading).toBeInTheDocument();
  });

  test.skip('renders "Interpersonal Skills" heading', () => {
    render(<AboutPage />);
    const interpersonalSkillsHeading = screen.getByText('Interpersonal Skills');
    expect(interpersonalSkillsHeading).toBeInTheDocument();
  });

  test.skip('renders communication skill', () => {
    render(<AboutPage />);
    const communicationSkill = screen.getByText('Effectively communicates, fostering customer and stakeholder engagement throughout the development process.');
    expect(communicationSkill).toBeInTheDocument();
  });

  test.skip('renders idea articulation skill', () => {
    render(<AboutPage />);
    const ideaArticulationSkill = screen.getByText('Articulates ideas, recommendations, and findings clearly, concisely, and inclusively.');
    expect(ideaArticulationSkill).toBeInTheDocument();
  });

  test.skip('renders Business Experience section', () => {
    render(<AboutPage />);
    const businessExperienceSection = screen.getByText('BUSINESS EXPERIENCE');
    expect(businessExperienceSection).toBeInTheDocument();
  });

  test.skip('renders Design Projects section', () => {
    render(<AboutPage />);
    const designProjectsSection = screen.getByText('DESIGN PROJECTS');
    expect(designProjectsSection).toBeInTheDocument();
  });

  test.skip('renders Leadership Roles section', () => {
    render(<AboutPage />);
    const leadershipRolesSection = screen.getByText('LEADERSHIP ROLES');
    expect(leadershipRolesSection).toBeInTheDocument();
  });

  test.skip('renders Meetings section', () => {
    render(<AboutPage />);
    const meetingsSection = screen.getByText('MEETINGS');
    expect(meetingsSection).toBeInTheDocument();
  });

  test.skip('renders "WHERE I\'M LOCATED" heading', () => {
    render(<AboutPage />);
    const locationHeading = screen.getByText("WHERE I'M LOCATED");
    expect(locationHeading).toBeInTheDocument();
  });

  test.skip('renders location information', () => {
    render(<AboutPage />);
    const locationInfo = screen.getByText('Huntingtown, Maryland!');
    expect(locationInfo).toBeInTheDocument();
  });

  test.skip('renders location image', () => {
    render(<AboutPage />);
    const locationImage = screen.getByAltText('htown');
    expect(locationImage).toBeInTheDocument();
  });

  test.skip('renders link to view resume', () => {
    render(<AboutPage />);
    const resumeLink = screen.getByText('View my resume or download a copy');
    expect(resumeLink).toBeInTheDocument();
  });
});