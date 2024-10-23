import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Calendar, Users, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'KinderCheck | Home',
  description: 'Kindergarten Check-in System',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to KinderCheck
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Simple and secure check-in system for your kindergarten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <QrCode className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
              <CardTitle>Check-In</CardTitle>
              <CardDescription>Scan QR code to check in your child</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/check-in">
                <Button className="w-full">Start Check-in</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="w-12 h-12 mb-4 text-green-600 dark:text-green-400" />
              <CardTitle>Absence Notice</CardTitle>
              <CardDescription>Report your child's absence</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/absence">
                <Button variant="outline" className="w-full">Report Absence</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <AlertCircle className="w-12 h-12 mb-4 text-orange-600 dark:text-orange-400" />
              <CardTitle>Emergency Care</CardTitle>
              <CardDescription>Request emergency care services</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/portal?tab=emergency">
                <Button variant="outline" className="w-full">Request Care</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400" />
              <CardTitle>Parent Portal</CardTitle>
              <CardDescription>Access messages and attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/portal">
                <Button variant="secondary" className="w-full">Enter Portal</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}