"use client";

import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "제목은 2글자 이상이어야 합니다." })
    .max(20, { message: "제목은 20글자 이하로 입력해주세요." }),
  url: z.string().url({ message: "올바른 URL 형식을 입력해주세요. (예: https://google.com)" }),
});

type FormValues = z.infer<typeof formSchema>;

interface AddLinkDialogProps {
  onAdd: (title: string, url: string) => void;
}

export function AddLinkDialog({ onAdd }: AddLinkDialogProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      url: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    onAdd(values.title, values.url);
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) form.reset();
    }}>
      <DialogTrigger asChild>
        <Button className="w-full h-16 rounded-2xl border-none bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 font-bold group relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <IconPlus className="w-5 h-5 text-white" />
          </div>
          <span className="relative z-10 text-lg">새 링크 추가하기</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold">새 링크 추가</DialogTitle>
          <DialogDescription className="text-slate-500">
            공유하고 싶은 새로운 링크의 정보를 입력해 주세요.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold ml-1">링크 제목</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="예: 내 인스타그램, 포트폴리오" 
                      className="rounded-xl h-12 focus-visible:ring-primary border-slate-200"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold ml-1">URL 주소</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://example.com" 
                      className="rounded-xl h-12 focus-visible:ring-primary border-slate-200"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-8">
              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "추가 중..." : "추가하기"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
