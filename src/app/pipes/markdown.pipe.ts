// src/app/pipes/markdown.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

@Pipe({
  name: 'markdown',
  standalone: true
})
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    if (!value) return '';

    marked.setOptions({
      breaks: true,
      gfm: true
    });

    const rawHtml = marked.parse(value) as string;

    const clean = DOMPurify.sanitize(rawHtml);

    return this.sanitizer.bypassSecurityTrustHtml(clean);
  }
}
