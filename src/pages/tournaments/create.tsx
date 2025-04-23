
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const tournamentSchema = z.object({
  name: z.string().min(3, "Tournament name must be at least 3 characters"),
  game: z.string().min(1, "Please select a game"),
  startDate: z.string().min(1, "Start date is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  prizePool: z.string().min(1, "Prize pool is required"),
  maxTeams: z.string().min(1, "Maximum teams is required"),
});

const CreateTournamentPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(tournamentSchema),
    defaultValues: {
      name: "",
      game: "",
      startDate: "",
      description: "",
      prizePool: "",
      maxTeams: "",
    },
  });

  const onSubmit = (data: z.infer<typeof tournamentSchema>) => {
    // This would send the data to the backend in a real app
    console.log(data);
    navigate("/tournaments");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Create Tournament</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tournament Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter tournament name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="game"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Game</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a game</option>
                          <option value="pubg">PUBG Mobile</option>
                          <option value="freefire">Free Fire</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter tournament description"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prizePool"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prize Pool</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter prize pool amount"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="maxTeams"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maximum Teams</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter maximum number of teams"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/tournaments")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Create Tournament</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateTournamentPage;
