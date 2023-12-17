import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="px-4 md:px-6 text-white font-body pt-20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Movie</TableHead>
            <TableHead>Director</TableHead>
            <TableHead>Year</TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              The Shawshank Redemption
            </TableCell>
            <TableCell>Frank Darabont</TableCell>
            <TableCell>1994</TableCell>
            <TableCell className="flex items-center gap-0.5 ml-auto">
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">The Godfather</TableCell>
            <TableCell>Francis Ford Coppola</TableCell>
            <TableCell>1972</TableCell>
            <TableCell className="flex items-center gap-0.5 ml-auto">
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">The Dark Knight</TableCell>
            <TableCell>Christopher Nolan</TableCell>
            <TableCell>2008</TableCell>
            <TableCell className="flex items-center gap-0.5 ml-auto">
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-primary" />
              <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
