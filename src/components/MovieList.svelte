<script>
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import StarIcon from "./StarIcon.svelte";
</script>

<div class="px-4 md:px-6 text-white font-body pt-20">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Movie</TableHead>
        <TableHead>Director</TableHead>
        <TableHead>Year</TableHead>
        <TableHead class="text-right">Rating</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">The Shawshank Redemption</TableCell>
        <TableCell>Frank Darabont</TableCell>
        <TableCell>1994</TableCell>
        <TableCell class="flex items-center gap-0.5 ml-auto">
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="font-medium">The Godfather</TableCell>
        <TableCell>Francis Ford Coppola</TableCell>
        <TableCell>1972</TableCell>
        <TableCell class="flex items-center gap-0.5 ml-auto">
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="font-medium">The Dark Knight</TableCell>
        <TableCell>Christopher Nolan</TableCell>
        <TableCell>2008</TableCell>
        <TableCell class="flex items-center gap-0.5 ml-auto">
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-primary" />
          <StarIcon class="w-4 h-4 fill-muted stroke-muted-foreground" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
