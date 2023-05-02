interface Course {
  id ?: string | number;
  name: string;
  description: string;
  review: string;
  rating: number;
  numRatings?: number;
  difficulty?: number;
  professor: string;
  link?: string;
  provider?: string;
}


export default Course;
