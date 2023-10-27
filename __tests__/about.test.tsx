import About from "@/pages/about/page";
import { render, screen } from "@testing-library/react";

describe("About Page - Rendering", () => {
  it("should have 'About Me' as title and professional summary", () => {
    render(<About />);
    const aboutTitle = screen.getByText("About Me");
    const aboutSummary = screen.getByText(
      /proficient Software Engineer specializing in frontend development, leveraging my expertise in JavaScript and TypeScript/
    );
    expect(aboutTitle).toBeInTheDocument();
    expect(aboutSummary).toBeInTheDocument();
  });

  it("should have tab title of 'Skills', 'Experiences', 'Education'", () => {
    render(<About />);
    const skillsTab = screen.getByText("Skills");
    const experiencesTab = screen.getByText("Experiences");
    const educationTab = screen.getByText("Education");

    expect(skillsTab).toBeInTheDocument();
    expect(experiencesTab).toBeInTheDocument();
    expect(educationTab).toBeInTheDocument();
  });

  it("should switch tab and display tab content", () => {
    render(<About />);

    const skillsContent = screen.getByText(/Programming Languages/);
    expect(skillsContent).toBeInTheDocument();
  });
});
